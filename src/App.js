import React from 'react'
import {Layout} from './modules/common'
import {DemoPage} from './modules/demo'
import {ToDoListContainer} from './modules/toDoList'
export default class App extends React.Component {
    render() {
        return <Layout>
 			<ToDoListContainer/>
        </Layout>
    }
}