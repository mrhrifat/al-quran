/**
* Title: WebRedirect
* Description:
* Filename: WebRedirect.jsx
* Path: /src/components/Home/Header/WebRedirect.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getWebRedirect, toggleWebRedirect } from "../../../redux/settings/webRedirect";
import { navigation } from "../../../utils/func";


const WebRedirect = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const webRedirect = useSelector(getWebRedirect)
  const location = useLocation()

  const [active, setActive] = React.useState(webRedirect.active);

  useEffect(() => {
    if (location.pathname === '/salah' && active === 'Al Quran') {
      navigate('/')
    }
  }, [active, location.pathname, navigate])


  const handleChange = (event, newActive) => {
    setActive(event.target.value)
    navigate(navigation(event.target.value))
    dispatch(toggleWebRedirect(event.target.value))
  };

  return (
    <>
      <Stack direction="row">
        <ToggleButtonGroup
          color="primary"
          value={active}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            borderRadius: 0,
          }}
        >
          {webRedirect?.webRedirect.map((webpage, ind) => (
            <ToggleButton
              key={ind}
              value={webpage}
              sx={{
                padding: { xs: "8px", sm: '14px' },
                borderRadius: 0,
                fontSize: { sm: '12px', md: "16px" },
                border: 'none ',
                color: (theme) => theme.palette.black.main,
                backgroundColor: (theme) => theme.palette.white.main,
                '&.MuiToggleButton-root.Mui-selected': {
                  color: (theme) => theme.palette.white.main,
                  backgroundColor: (theme) => theme.palette.primary.main
                },
                '&.MuiToggleButton-root:hover': {
                  color: (theme) => theme.palette.white.main,
                  backgroundColor: (theme) => theme.palette.primary.main,
                }

              }} >

              {webpage}
            </ToggleButton>
          ))}

        </ToggleButtonGroup>
      </Stack>
    </>
  );
};

export default WebRedirect;