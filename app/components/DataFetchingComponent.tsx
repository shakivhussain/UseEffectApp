import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


interface ToDoItem {
    userId: number
    id: number
    title: string
    completed: boolean
}

const DataFetchingComponent = () => {

    const [data, setData] = useState<ToDoItem[]>([])

    // https://jsonplaceholder.typicode.com/todos

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            )



            const result = await response.json()
            console.log(result);
            setData(result)

        }




        try {
            fetchData()
        } catch (error) {

            console.error("Got Error" + error);

        }


    }, [])

    return (
        <View>
            <Text>Data Fetching Component</Text>


            <FlatList data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={{ paddingVertical: 20, backgroundColor: "white" }}>{item.title}</Text>)
                } />


        </View>
    )
}

export default DataFetchingComponent

