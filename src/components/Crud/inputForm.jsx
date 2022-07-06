import { Input, FormControl, FormLabel, Flex } from "@chakra-ui/react";


export const InputForm = ({ label, name, ...rest }) => {
    return (
        <FormControl marginY="6">
            <FormLabel>{label}</FormLabel>
            <Input name={name} id={name} {...rest} />
        </FormControl>
    )
}


// ...rest serve pro objeto aceeitar qualquer propriedade