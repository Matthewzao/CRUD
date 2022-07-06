import {
    Flex, Text, Button, Input, FormControl, FormLabel, Box, VStack, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import { InputForm } from "../components/Crud/inputForm";

export default function ProjetoCrud() {
    return (
        <Flex direction="column" margin="6">
            <Box justifyContent="space-between">
                <Button colorScheme="blue">+</Button>
                <Text>Lista de Cliente</Text>
            </Box>
            <VStack>
                <InputForm label="Nome" name="name" />
                <InputForm label="Email" name="email" type="email" />
                <Button colorScheme="pink" fontSize="sm" alignSelf="flex-end">Cadastro</Button>
            </VStack>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>nome</Th>
                            <Th>email</Th>
                            <Th> action </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Matthew</Td>
                            <Td>matthew@gmail.com</Td>
                            <Td>
                                <Flex gap="2">
                                    <Button size="sm" colorScheme="purple">Editar</Button>
                                    <Button size="sm" colorScheme="red">Remover</Button>
                                </Flex>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Gustavo</Td>
                            <Td>gustavo@gmail.com</Td>
                            <Td>
                                <Flex gap="2">
                                    <Button size="sm" colorScheme="purple">Editar</Button>
                                    <Button size="sm" colorScheme="red">Remover</Button>
                                </Flex>
                            </Td>
                        </Tr>
                    </Tbody>

                </Table>
            </TableContainer>
        </Flex >

    )
}