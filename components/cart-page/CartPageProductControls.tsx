import { Button } from "@mui/material"

interface CartPageProductControlsProps {
    areParamsChanged: boolean,
    removeProduct: () => void,
    updateProduct: () => void
}

const CartPageProductControls = ({areParamsChanged, removeProduct, updateProduct}: CartPageProductControlsProps ) => {
    return (
        <div>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#c26d6dee',
                    px: 4,
                    fontFamily: 'inherit',
                    fontSize: 'small',
                    border: "1px solid transparent",
                    '&:hover': {
                        backgroundColor: 'white',
                        color: '#c26d6dee',
                        border: '1px solid #c26d6dee'
                    }
                }}
                onClick={removeProduct}
            >
                Delete
            </Button>
        
            <Button
                variant="contained"
                sx={{
                    visibility: areParamsChanged ? 'visible': 'hidden',
                    backgroundColor: 'lightgreen',
                    px: 4,
                    mx: 3,
                    fontFamily: 'inherit',
                    fontSize: 'small',
                    my: 2,
                    border: "1px solid transparent",
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'lightgreen',
                        border: '1px solid lightgreen'
                    }
                }}
                onClick={updateProduct}
            >
                Update
            </Button>
            
        </div>
    )
}

export default CartPageProductControls