import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  Modal,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRecaptcha } from 'react-hook-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import {
  loginAction,
  selectLoading,
  selectRegisterError,
  selectRegisterSuccess,
} from '../loginSlice';
import {
  BoxLogin,
  Mybox,
  MyButtonAuthLogin,
  MyComponent,
  MyLabel,
  MyTextField,
  NtfTitle,
} from '../stylesForAuth';

interface IFormInputs {
  name: string;
  email: string;
  password: any;
  confirmPassword: any;
}

const containerId = 'test-recaptcha';
const sitekey = '6LcSG9EaAAAAABvbpHkdugGmjEWeYPp6NoPPDEvt';
const schema = yup
  .object({
    name: yup.string().required('Invalid name'),
    email: yup.string().email('Invalid Email').required('Invalid Email'),
    password: yup
      .string()
      .required('Invalid password')
      .min(8, 'Password length should be between 8 to 255 characters.')
      .max(255, 'Password length should be between 8 to 255 characters.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], "Password's not match")
      .required('Required!'),
  })
  .required();
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: '#282c38',

  borderRadius: 8,

  p: 4,
};

export const InputRegister = props => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [captchaResponse, setCaptchaResponse] = useState(null);
  const successCallback = response => {
    setCaptchaResponse(response);
  };
  const expiredCallback = () => setCaptchaResponse(null);

  useRecaptcha({
    containerId,
    successCallback,
    expiredCallback,
    size: 'normal',
    sitekey,
  });
  const form = useForm<IFormInputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const hasNameError = errors.name;
  const hasEmailError = errors.email;
  const hasPasswordError = errors.password;
  const hasConfirmPasswordError = errors.confirmPassword;

  const [state, setState] = useState({
    showPassword: false,
    showConfirmpassword: false,
  });

  const handleClickShowPassword = () => {
    setState(state => ({ ...state, showPassword: !state.showPassword }));
  };
  const handleClickShowConfirmpassword = () => {
    setState(state => ({
      ...state,
      showConfirmpassword: !state.showConfirmpassword,
    }));
  };

  const onSubmit = (data: any) => {
    const newData = { ...data, recaptcha_response: captchaResponse };
    dispatch(loginAction.register(newData));
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ntfError = useSelector(selectRegisterError);

  const ntfSuccess = useSelector(selectRegisterSuccess);
  return (
    <MyComponent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Mybox h="388px">
          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <>
                <MyLabel>Name</MyLabel>
                <MyTextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  placeholder="Enter name"
                  error={Boolean(hasNameError)}
                  helperText={hasNameError?.message}
                  autoFocus={false}
                />
              </>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <>
                <MyLabel>Email</MyLabel>
                <MyTextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  placeholder="Enter email"
                  error={Boolean(hasEmailError)}
                  helperText={hasEmailError?.message}
                  autoFocus={false}
                />
              </>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field }) => (
              <>
                <MyLabel>Password</MyLabel>
                <MyTextField
                  {...field}
                  className="mySetup"
                  id="outlined-adornment-password"
                  type={state.showPassword ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  placeholder="Enter password"
                  error={Boolean(hasPasswordError)}
                  helperText={hasPasswordError?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {state.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  autoFocus={false}
                />
              </>
            )}
          />
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <>
                <MyLabel>Confirm password</MyLabel>
                <MyTextField
                  {...field}
                  className="mySetup"
                  id="outlined-adornment-password_2"
                  type={state.showConfirmpassword ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  placeholder="Confirm password"
                  error={Boolean(hasConfirmPasswordError)}
                  helperText={hasConfirmPasswordError?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowConfirmpassword}
                        >
                          {state.showConfirmpassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  autoFocus={false}
                />
              </>
            )}
          />
        </Mybox>
        <NtfTitle sz="14px" fw={400}>
          We will not share or sell your information to 3rd parties.
          <br />
          By clicking on <span>Create Account</span>, you agree to DeFi For
          You’s Terms and Conditions of Use.
        </NtfTitle>

        <div id={containerId} className="g-recaptcha" />

        <BoxLogin>
          <MyButtonAuthLogin
            disabled={!captchaResponse}
            type="submit"
            w="174px"
            wmb="170px"
            hmb="42px"
            onClick={handleOpen}
          >
            {loading ? (
              <CircularProgress size={20} color="secondary" />
            ) : (
              'Create Account'
            )}
          </MyButtonAuthLogin>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontFamily: 'Montserrat',
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                {ntfError}
              </Typography>
              <MyButtonAuthLogin
                sx={{
                  fontFamily: 'Montserrat',
                  width: '100%',
                  margin: '10px 0 0 50%',
                  transform: 'translateX(-50%)',
                }}
                w="100px"
                onClick={handleClose}
              >
                OK
              </MyButtonAuthLogin>
            </Box>
          </Modal>
        </BoxLogin>
      </form>
    </MyComponent>
  );
};
