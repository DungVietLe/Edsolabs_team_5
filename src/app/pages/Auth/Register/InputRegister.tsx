import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  BoxLogin,
  Mybox,
  MyButtonAuthLogin,
  MyCapcha,
  MyComponent,
  MyLabel,
  MyTextField,
  NtfTitle,
} from '../stylesForAuth';
interface Props {}
interface IFormInputs {
  Name: string;
  Email: string;
  Password: any;
  ConfirmPassword: any;
  recaptcha: any;
}
const schema = yup
  .object({
    Name: yup.string().required('Invalid name'),
    Email: yup.string().email('Invalid Email').required('Invalid Email'),
    Password: yup
      .string()
      .required('Invalid password')
      .min(8, 'Password length should be between 8 to 255 characters.')
      .max(255, 'Password length should be between 8 to 255 characters.'),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref('Password')], "Password's not match")
      .required('Required!'),
    recaptcha: yup.string().required('Invalid capcha'),
  })
  .required();
export const InputRegister = (props: Props) => {
  const [valueCapcha, setValueCapcha] = useState(null);
  const form = useForm<IFormInputs>({
    defaultValues: {
      Name: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
      recaptcha: '',
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const hasNameError = errors.Name;
  const hasEmailError = errors.Email;
  const hasPasswordError = errors.Password;
  const hasConfirmPasswordError = errors.ConfirmPassword;

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

  const onChange = value => {
    setValueCapcha(value);
  };
  const onSubmit = (data: any) => {
    console.log(valueCapcha);

    if (valueCapcha !== null) {
      console.log(data);
    }
  };

  return (
    <MyComponent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Mybox h="388px">
          <Controller
            name="Name"
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
            name="Email"
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
            name="Password"
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
            name="ConfirmPassword"
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
        <MyCapcha
          name="recaptcha"
          sitekey="6Lf_BLIcAAAAADjns4IzWXSZElWq9-gqF7p9IzRC"
          onChange={onChange}
        />
        <BoxLogin>
          <MyButtonAuthLogin type="submit" w="174px" wmb="170px" hmb="42px">
            Create Account
          </MyButtonAuthLogin>
        </BoxLogin>
      </form>
    </MyComponent>
  );
};
