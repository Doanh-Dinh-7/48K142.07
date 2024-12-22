import { useEffect, useState } from "react";
import {
  Flex,
  FormControl,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BASE_URL } from "../../../../App";

const EditProduct = ({ product, onInput, onCancel }) => {
  const [productName, setProductName] = useState(product?.TenSP || "");
  const [productPrice, setProductPrice] = useState(product?.DonGiaBan || 0);
  const toast = useToast();

  // const handleUpdate = () => {
  //   const updateProduct = {
  //     ...product,
  //     name: productName,
  //     price: parseFloat(productPrice),
  //   };
  //   onInput(updateProduct);
  // };

  // Cập nhật sản phẩm vào API
  const handleUpdate2API = async () => {
    try {
      const res = await fetch(BASE_URL + "/sanpham/" + product.MaSP, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          TenSP: productName,
          DonGiaBan: parseFloat(productPrice),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      toast({
        title: "Thành công",
        description: data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onInput();
    } catch (error) {
      toast({
        title: "Lỗi",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" alignItems="center" gap="5" bg="#f5f5f5" p="2">
      <Text fontWeight="bold">Sửa Sản phẩm</Text>
      <FormControl isRequired width={"28vw"}>
        <Flex direction="column" gap="5">
          <Flex alignItems="center">
            <Text width={"30%"}>Tên sản phẩm:</Text>
            <Flex>
              <Input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Nhập tên sản phẩm"
              />
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Text width="30%">Giá:</Text>
            <NumberInput
              min={0}
              value={productPrice}
              onChange={(valueString) => setProductPrice(valueString)}
            >
              <NumberInputField placeholder="Nhập giá sản phẩm" />
            </NumberInput>
          </Flex>
        </Flex>
      </FormControl>

      <Flex justifyContent={"space-around"} gap={"5"}>
        <Button colorScheme="teal" width="full" onClick={handleUpdate2API}>
          Lưu
        </Button>
        <Button colorScheme="red" width="full" onClick={onCancel}>
          Hủy
        </Button>
      </Flex>
    </Flex>
  );
};

export default EditProduct;
