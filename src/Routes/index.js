import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Table from "../components/Table";
import EmployeeForm from "../components/EmployeeForm";
import NotFound from "../components/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={EmployeeForm} />
            <Route path="/employeeform" component={EmployeeForm} />
            <Route path="/table" component={Table} />
            <Route component={NotFound} />
        </Switch>
    );
}
