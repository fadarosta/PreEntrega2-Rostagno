import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const CartWidget = () => {
    return (
        <Badge badgeContent={1} color="success">
            <ShoppingBasketIcon color="action" />
        </Badge>
    )
}

export default CartWidget