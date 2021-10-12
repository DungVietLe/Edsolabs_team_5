import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CircularProgress, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import { loginAction, selectLoading } from '../loginSlice';
import {
  BoxLogin,
  Mybox,
  MyButtonAuthLogin,
  MyComponent,
  MyLabel,
  MyTextField,
} from '../stylesForAuth';
interface IFormInputs {
  username: string;
  password: any;
}

const schema = yup
  .object({
    username: yup.string().email('Invalid Email').required('Invalid Email'),
    password: yup
      .string()
      .required('Invalid password')
      .min(8, 'Password length should be between 8 to 255 characters.')
      .max(255, 'Password length should be between 8 to 255 characters.'),
  })
  .required();

export default function Input() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [state, setState] = useState({
    showPassword: false,
  });
  const form = useForm<IFormInputs>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = async data => {
    dispatch(loginAction.login(data));
  };
  const hasError = errors.username;
  const hasErrorPass = errors.password;

  //handle show password
  const handleClickShowPassword = () => {
    setState(state => ({ showPassword: !state.showPassword }));
  };

  return (
    <MyComponent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Mybox>
          <Controller
            name="username"
            control={form.control}
            render={({ field }) => (
              <>
                <MyLabel>Email</MyLabel>
                <MyTextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  placeholder="Enter email"
                  error={Boolean(hasError)}
                  helperText={hasError?.message}
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
                  error={Boolean(hasErrorPass)}
                  helperText={hasErrorPass?.message}
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
        </Mybox>
        <ForgotPassword />
        <BoxLogin>
          <MyButtonAuthLogin type="submit" hmb="42px">
            {loading ? (
              <CircularProgress size={20} color="secondary" />
            ) : (
              'Log in'
            )}
          </MyButtonAuthLogin>
        </BoxLogin>
      </form>
    </MyComponent>
  );
}
