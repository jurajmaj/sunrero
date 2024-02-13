import React, { useState } from "react";
import { Order } from "../../types/orderTypes";
import { Card, CardContent, Typography, Paper, Divider, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const [isVisible, setIsVisible] = useState(true);
  const pendingStates = ['new', 'waiting_for_confirmation', 'confirmed'];

  const handleCancelOrder = () => {
    setIsVisible(false);
  }

  if(!isVisible)
    return null;

  return (
    <Card sx={{ minWidth: 275, marginBottom: 2, background: '#E3E8F0' }}>
      <CardContent>
        <Paper sx={{ background: '#FB8DA0' }}>
          <Typography variant="h5" component="div">
            {order.id}
          </Typography>
        </Paper>
        
        <Divider sx={{ borderColor: 'white', borderWidth: '2', margin: '10px 0' }}/>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
          <Typography color="text.secondary" style={{ display: 'flex', alignItems: 'center'}}>
            <CalendarMonthIcon fontSize="small" style={{ marginRight: '5px' }} />
            {new Date(order.createdAt).toLocaleDateString()}
          </Typography>
          <Typography color="text.secondary" style={{ display: 'flex', alignItems: 'center'}}>
            <AccessTimeIcon fontSize="small" style={{ marginRight: '5px' }} />
            {new Date(order.createdAt).toLocaleTimeString()}
          </Typography>
        </div>
        
        {order.orderItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography color="text.secondary" style={{ marginBottom: '20px'}}>
              {item.quantity}x {item.orderMenuItem.translations.en.name}
            </Typography>
            <Typography color="text.secondary">
              {item.finalPrice.currency === 'EUR' ? '€' : item.finalPrice.currency}
              {item.finalPrice.amount}
            </Typography>
          </div>
        ))}

        <Divider sx={{ borderColor: 'white', borderWidth: '2', marginTop: '50px' }}/>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
          <Typography color="text.secondary">
            State
          </Typography>
          <Typography color="text.secondary">
            {order.state}
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
          <Typography color="text.secondary">
            Total price 
          </Typography>
          <Typography color="text.secondary">
            {order.totalPrice.currency === 'EUR' ? '€' : order.totalPrice.currency}
            {order.totalPrice.amount}
          </Typography>
        </div>
        
        {pendingStates.includes(order.state) && (
          <Button size="small" variant="outlined" color="error" style={{marginTop: '20px'}}
            onClick={handleCancelOrder}>
            Cancel Order
          </Button>
        )}

      </CardContent>
    </Card>
  );
}

export default OrderCard;
