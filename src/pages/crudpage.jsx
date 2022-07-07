import { useState } from "react";
import { Flex, Text, Button, Input, Box, VStack, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Concat, Map }
    from "@chakra-ui/react";
import { InputForm } from "../components/Crud/inputForm";

export default function ProjetoCrud() {

    const [clients, setClients] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    // CRIANDO USUARIO
    const handleSubmitCreateClient = (e) => {
        e.preventDefault()
        if (!name && !email) return

        setClients(clients.concat({ _id: new Date().getMilliseconds().toString(), name, email }))

        // limpando os dados name e email
        setName('')
        setEmail('')

    }

    const handleChangeName = (text) => {
        setName(text)
    }

    const handleChangeEmail = (text) => {
        setEmail(text)
    }

    return (
        <Flex direction="column" margin="6">
            <Box justifyContent="space-between">
                <Button colorScheme="blue">+</Button>
                <Text>Lista de Cliente</Text>
            </Box>
            <VStack as="form" onSubmit={handleSubmitCreateClient}>
                <InputForm label="Nome" name="name" value={name} onChange={e => handleChangeName(e.target.value)} />

                <InputForm label="Email" name="email" value={email} type="email" onChange={e => handleChangeEmail(e.target.value)} />

                <Button colorScheme="pink" fontSize="sm" alignSelf="flex-end" type="submit">Cadastro</Button>
            </VStack>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>nome</Th>
                            <Th>email</Th>
                            <Th>action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/* ADICIONANDO CLIENTE DANDO FUNÇÃO AO BOTÃO CADASTRO */}
                        {clients.map(client => (
                            <Tr key={client.email}>
                                <Td>{client.name}</Td>
                                <Td>{client.email}</Td>
                                <Td>
                                    <Flex gap="2">
                                        <Button size="sm" colorScheme="purple">Editar</Button>
                                        <Button size="sm" colorScheme="red">Remover</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex >

    )
}