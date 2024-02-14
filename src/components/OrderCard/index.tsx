import React, { useState } from "react";
import { Order } from "../../types/orderTypes";
import { Card, CardContent, Typography, Paper, Divider, Button, Box } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { formatState } from "../../utils/formatState";
import { getItemName } from "../../utils/getItemName";
import { useTranslation } from "react-i18next";

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const [isVisible, setIsVisible] = useState(true);
  const pendingStates = ['new', 'waiting_for_confirmation', 'confirmed'];
  const { t } = useTranslation();

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
            <Box display="flex" alignItems="baseline" style={{ marginBottom: '20px' }}>
              <Typography color="text.primary">
                {item.quantity}x
              </Typography>
              <Typography color="text.primary" sx={{ fontWeight: 'bold', marginLeft: '5px' }}>
                {getItemName(item)}
              </Typography>
            </Box>
            <Typography color="text.primary" sx={{ fontWeight: 'bold' }}>
              {item.finalPrice.currency === 'EUR' ? '€' : item.finalPrice.currency}
              {item.finalPrice.amount}
            </Typography>
          </div>
        ))}

        <Divider sx={{ borderColor: 'white', borderWidth: '2', marginTop: '50px' }}/>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
          <Typography color="text.primary">
            {t('state')}
          </Typography>
          <Paper sx={{ background: '#f7c2ca', paddingInline: '10px'}}>
            <Typography color="text.primary" sx={{ fontWeight: 'bold' }}>
              {formatState(order.state)}
            </Typography>
          </Paper>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
          <Typography color="text.primary">
            {t('total_price')}
          </Typography>
          <Typography color="text.primary" sx={{ fontWeight: 'bold' }}>
            {order.totalPrice.currency === 'EUR' ? '€' : order.totalPrice.currency}
            {order.totalPrice.amount}
          </Typography>
        </div>
        
        {pendingStates.includes(order.state) && (
          <Button size="small" variant="outlined" color="error" style={{marginTop: '20px'}}
          onClick={handleCancelOrder}>
            {t('cancel_order')}
          </Button>
        )}

      </CardContent>
    </Card>
  );
}

export default OrderCard;
