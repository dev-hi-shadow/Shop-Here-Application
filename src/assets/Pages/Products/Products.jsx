/* eslint-disable no-unused-vars */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";

import { useGetProductsQuery } from "../../../Services/API/Products";
import Filterer from "../../Components/Filterer";
import { PrWithDesc } from "./SingleProduct";
import _ from "lodash";
import { IconFilter } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import useHash from "../../Hooks/useHash";
const Products = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { encode, decode } = useHash();

  const {
    data: Products,
    isSuccess: isPrSuccess,
    isError: isPrError,
    isLoading: isPrLoading,
  } = useGetProductsQuery();
  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center justify-between">
            <div className="col">
              <h2 className="page-title">Search results</h2>
              <div className="text-secondary mt-1">
                About 2,410 result (0.19 seconds)
              </div>
            </div>
            <div className="col text-end">
              <Tooltip content="Filter">
                <Button
                  isIconOnly
                  color="primary"
                  variant="flat"
                  aria-label="Filter"
                  onPress={onOpen}
                >
                  <IconFilter />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="container-xl">
          <div className="row g-4">
            <div className=" xs:col-12 col-3">
              <Filterer />
            </div>
            <div className="col-9 xs:col-12 flex flex-wrap gap-3">
              {isPrSuccess &&
                Array.isArray(Products?.data?.rows) &&
                _.map(Products?.data?.rows, (item) => {
                  return (
                    <>
                      <div className="flex-grow basis-1/4	">
                        <Link to={`/p/${encode(item.id)}?v=${encode(0)}`}>
                          <PrWithDesc data={item} />
                        </Link>
                      </div>
                      <div className="flex-grow basis-1/4	">
                        <Link to={`/p/${encode(item.id)}?v=${encode(0)}`}>
                        <PrWithDesc data={item} />
                        </Link>
                      </div>
                      <div className="flex-grow basis-1/4	">
                      <Link to={`/p/${encode(item.id)}?v=${encode(0)}`}>
                          <PrWithDesc data={item} />
                        </Link>
                      </div>
                      <div className="flex-grow basis-1/4	 ">
                      <Link to={`/p/${encode(item.id)}?v=${encode(0)}`}>
                          <PrWithDesc data={item} />
                        </Link>
                      </div>
                      <div className="flex-grow basis-1/4	">
                      <Link to={`/p/${encode(item.id)}?v=${encode(0)}`}>
                          <PrWithDesc data={item} />
                        </Link>
                      </div>
                      <div className="flex-grow basis-1/4	">
                      <Link to={`/p/${encode(item.id)}?v=${encode(0)}`}>
                          <PrWithDesc data={item} />
                        </Link>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Modal
        size="lg"
        scrollBehavior="inside"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Filter Products
              </ModalHeader>
              <ModalBody>
                <Filterer />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Products;
