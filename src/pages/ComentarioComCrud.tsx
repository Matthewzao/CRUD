import { SimpleGrid, Box, Text, Flex, Button, Avatar, VStack, Icon, Input, FormControl, TableContainer, Table, Thead, Tr, Th, Tbody, Td, } from "@chakra-ui/react"
import { RiAddLine, RiDislikeLine, RiHeartFill, RiHeartsLine, RiLinkedinBoxFill } from "react-icons/ri";
import { useState } from "react";
export function Comentario() {


    const [clients, setClients] = useState([])

    const [name, setName] = useState('')


    // CRIANDO USUARIO
    const handleSubmitCreateClient = (e) => {
        e.preventDefault()
        if (!name) return
        setClients(clients.concat({ _id: new Date().getMilliseconds().toString(), name }))

        // limpando os dados name e email
        setName('')

    }

    const handleChangeName = (text) => {
        setName(text)
    }



    return (
        // CAMPO PARA FAZER O COMENTARIO
        <SimpleGrid justifyContent="center">
            <Box borderRadius="5" marginTop="10" width="500px">
                <Flex direction="column">
                    <Flex gap="3" direction="row">
                        <Avatar></Avatar>
                        <Flex direction="column">
                            <Text fontSize="lg" fontWeight="bold">Matthew</Text>
                            <VStack direction="row" as="form" onSubmit={handleSubmitCreateClient}>
                                <Input variant='flushed' placeholder='Comente algo...' onChange={e => handleChangeName(e.target.value)} />
                                <Flex>
                                    <Button _active={{ color: "blue.200" }} _hover={{ bg: "none", color: "blue" }} bg="none" m="0" p="0" maxH="fit-content" maxW="fit-content" w="30px" h="30px"><Icon fontSize="20px" as={RiHeartFill}></Icon></Button>
                                    <Button _active={{ color: "pink" }} _hover={{ bg: "none", color: "pink.600" }} bg="none" m="0" p="0" maxH="fit-content" maxW="fit-content" w="30px" h="30px"><Icon fontSize="20px" as={RiDislikeLine}></Icon></Button>
                                    <Button fontSize="sm" colorScheme="pink" size="sm" type="submit" marginLeft="4">Comentar</Button>

                                </Flex>

                            </VStack>
                            <Flex gap="6" direction="row">

                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
            {/* CAMPO ONDE COMENTARIO FICA FIXADO APOS COMENTAR */}
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Comentário</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {clients.map(client => (
                            <Tr key={client.name}>
                                <Td>{client.name}</Td>
                            </Tr>
                        ))}

                    </Tbody>
                </Table>
            </TableContainer>
        </SimpleGrid >
    )
}