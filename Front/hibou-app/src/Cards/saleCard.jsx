import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState, React } from 'react';
import axios from "axios";


function SaleCard(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <p>
                        {props.client.sale_id}
                    </p>
                    <p>
                        {props.client.store_id}
                    </p>
                    <p>
                        {props.client.customer_id}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default SaleCard;