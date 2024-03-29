import { Alert, Box, Button, Container, Snackbar } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { Loading } from "../Loading";
import { ITableRow, Table } from "./Table";
import { Modal } from "./Modal";
import { DataBase, TResultSuccess } from "../../firebase/database";
import { Data } from "../../firebase/types";
import { AlertStatus } from "../../types";
import { DEFAULT_LIST_DATA_PROPS } from "../../utils/constants";

interface IItemsManagerProps<TItem> {
  dataBase: DataBase;
  name: string;
  header: string[];
  rows: (items: TItem[]) => ITableRow[];
  modalRenderer: ({
    item,
    onChange,
  }: {
    item: TItem | null;
    onChange: (item: TItem) => void;
  }) => JSX.Element;
  onAddItem?: (item: TItem) => void;
  onDeleteItem?: (item: TItem) => void;
}

export function ItemsManager<TItem extends { label: string; id: string }>({
  dataBase,
  name,
  header,
  rows,
  modalRenderer,
  onAddItem,
  onDeleteItem,
}: IItemsManagerProps<TItem>) {
  const [items, setItems] = useState<TItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TItem | null>(null);
  const [alert, setAlert] = useState<{
    label: string;
    type: AlertStatus;
  }>({
    label: "",
    type: AlertStatus.Success,
  });

  useEffect(() => {
    dataBase.listData(
      (groupedData) => {
        if (groupedData) {
          setItems(groupedData.data as TItem[]);
        }

        setLoading(false);
      },
      { ...DEFAULT_LIST_DATA_PROPS, onlyOnce: false }
    );
  }, [dataBase]);

  async function handleAdd(e: FormEvent) {
    e.preventDefault();

    let result = await dataBase.create(selectedItem as Data);

    if (!result?.error) {
      const convertedResult = result as TResultSuccess;

      setOpenModalAdd(false);

      setAlert({
        label: "saved as successfully",
        type: AlertStatus.Success,
      });

      onAddItem &&
        onAddItem({ ...selectedItem, id: convertedResult.data.id } as TItem);
    } else {
      setAlert({
        label: result.error.message,
        type: AlertStatus.Success,
      });
    }
  }

  async function handleEdit(e: FormEvent) {
    e.preventDefault();

    const result = await dataBase.update(
      selectedItem?.id as string,
      selectedItem as Data
    );

    if (!result?.error) {
      setOpenModalEdit(false);
      setSelectedItem(null);

      setAlert({
        label: "saved as successfully",
        type: AlertStatus.Success,
      });
    } else {
      setAlert({
        label: result.error.message,
        type: AlertStatus.Success,
      });
    }
  }

  async function handleDelete() {
    const result = await dataBase.delete(selectedItem?.id as string);

    if (!result?.error) {
      onDeleteItem && onDeleteItem(selectedItem as TItem);
      setOpenModalDelete(false);
      setSelectedItem(null);

      setAlert({
        label: "saved as successfully",
        type: AlertStatus.Success,
      });
    } else {
      setAlert({
        label: result.error.message,
        type: AlertStatus.Success,
      });
    }
  }

  function resetAlertStatus() {
    setAlert({ label: "", type: AlertStatus.Success });
  }

  if (loading) {
    return <Loading page />;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Table
          header={header}
          rows={rows(items)}
          onAdd={() => {
            setOpenModalAdd(true);
            setSelectedItem(null);
          }}
          onEdit={(itemId) => {
            setOpenModalEdit(true);
            setSelectedItem(items.find(({ id }) => id === itemId) ?? null);
          }}
          onDelete={(itemId) => {
            setOpenModalDelete(true);
            setSelectedItem(items.find(({ id }) => id === itemId) ?? null);
          }}
        />
      </Container>

      <Modal
        title={`Edit ${name}`}
        open={openModalEdit}
        onClose={() => setOpenModalEdit(false)}
      >
        <form onSubmit={handleEdit}>
          {modalRenderer({
            item: selectedItem,
            onChange: (item) => setSelectedItem(item),
          })}

          <Box sx={{ textAlign: "right" }} mt={1}>
            <Button onClick={() => setOpenModalEdit(false)}>cancel</Button>
            <Button type="submit">save</Button>
          </Box>
        </form>
      </Modal>

      <Modal
        title={`Delete ${name}`}
        open={openModalDelete}
        onClose={() => setOpenModalDelete(false)}
      >
        are you sure you want to delete <strong>{selectedItem?.label}</strong>?
        <Box sx={{ textAlign: "right" }} mt={1}>
          <Button onClick={() => setOpenModalDelete(false)}>cancel</Button>
          <Button onClick={handleDelete}>delete</Button>
        </Box>
      </Modal>

      <Modal
        title={`Add ${name}`}
        open={openModalAdd}
        onClose={() => setOpenModalAdd(false)}
      >
        <form onSubmit={handleAdd}>
          {modalRenderer({
            item: selectedItem,
            onChange: setSelectedItem,
          })}

          <Box sx={{ textAlign: "right" }} mt={1}>
            <Button onClick={() => setOpenModalAdd(false)}>cancel</Button>
            <Button type="submit">save</Button>
          </Box>
        </form>
      </Modal>

      <Snackbar
        open={!!alert.label}
        autoHideDuration={6000}
        onClose={resetAlertStatus}
      >
        <Alert
          onClose={resetAlertStatus}
          severity="success"
          sx={{ width: "100%" }}
        >
          {alert.label}
        </Alert>
      </Snackbar>
    </>
  );
}
