import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
} from "@chakra-ui/react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { TfiPencilAlt } from "react-icons/tfi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useEffect } from "react";

const ViewProduct = ({ products, onDelete, onEdit, onAdd }) => {
  return (
    <Flex
      direction={"column"}
      bg={"#dbdbdb"}
      width={"70vw"}
      alignItems={"center"}
      gap={"5"}
    >
      <Text fontWeight={"bold"}>Danh sách sản phẩm</Text>
      <Button
        position={"absolute"}
        marginTop={"0.5rem"}
        marginRight={"-44vw"}
        size="sm"
        leftIcon={<IoMdAddCircleOutline />}
        colorScheme="blue"
        onClick={onAdd}
      >
        Thêm
      </Button>
      <Box
        width="50vw"
        maxHeight="70vh" // Chiều cao tối đa của bảng
        overflowY="auto" // Thêm thanh cuộn dọc
        bg="white"
        borderRadius="md"
        boxShadow="sm"
      >
        <Table size="sm" fontSize={"1rem"} variant="striped">
          <Thead>
            <Tr>
              <Th>Mã sản phẩm</Th>
              <Th>Tên</Th>
              <Th>Giá</Th>
              <Th>Hành động</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((prod) => (
              <Tr key={prod.MaSP}>
                <Td>{prod.MaSP}</Td>
                <Td>{prod.TenSP}</Td>
                <Td>{prod.DonGiaBan}</Td>
                <Td>
                  <Flex gap="2">
                    <Button
                      size="sm"
                      leftIcon={<TfiPencilAlt />}
                      colorScheme="yellow"
                      onClick={() => onEdit(prod)}
                    >
                      Sửa
                    </Button>
                    <Button
                      size="sm"
                      leftIcon={<RiDeleteBin2Line />}
                      colorScheme="red"
                      onClick={() => onDelete(prod)}
                    >
                      Xóa
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default ViewProduct;
