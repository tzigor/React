import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { InputUserProps } from '../../Types';


export const InputUser = ({ changeUser }: InputUserProps) => {
    const handleChangeUser = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        changeUser(ev.target.value);
    };
    return (
        <Input
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
            style={{ width: '150px' }}
            placeholder="User"
            onChange={handleChangeUser}
            inputProps={{ 'data-testid': 'input' }}
        />
    )
}