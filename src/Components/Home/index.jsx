import React, { useState } from 'react'
import "./style.css"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { Divider } from '@mui/material';
import DropdownImg from '../../img/Chevron-Right-1.png'


const steps = ['Device', 'Verification', 'Receive'];

const DummyData = [
    {
        coinName: "BITCOIN",
        currentCoinBalance: "BTC 0.0025600",
        value: "USD 0.5268"
    },
    {
        coinName: "ETHEREUM",
        currentCoinBalance: "ETH 0.0025600",
        value: "USD 0.5268"
    },
    {
        coinName: "BINANCE COIN",
        currentCoinBalance: "BNB 0.0025600",
        value: "USD 0.5268"
    },
    {
        coinName: "BITCOIN",
        currentCoinBalance: "BTC 0.0025600",
        value: "USD 0.5268"
    },
    {
        coinName: "ETHEREUM",
        currentCoinBalance: "ETH 0.0025600",
        value: "USD 0.5268"
    },
    {
        coinName: "BINANCE COIN",
        currentCoinBalance: "BNB 0.0025600",
        value: "USD 0.5268"
    },
]

const deviceData = [
    {
        name: "Select the Wallet On device",
        selected: false
    },
    {
        name: "Select the Coin on device",
        selected: false
    },
    {
        name: "Tap 1 card of any 4 Cards",
        selected: false
    },
]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    padding: "50px",
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: '80%',
    bgcolor: '#13161A',
    color: "black",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Home = () => {
    const [modal, setModal] = useState(false)
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [anchorEl, setAnchorEl] = useState(null);
    const [filter, setFilter] = useState("Amount   High - Low");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const setFilterFun = (item) => {
        setFilter(item)
        handleClose()
    }


    return (<>
        <div className='mainPage d-flex'>
            <div className="sidebarMenu">
                <ul className='menuItems'>
                    <li className='menuItem'>
                        <a href="" className='menuLink d-flex'>
                            <span className='menuIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                    <path d="M13.4186 15H3.09302C1.93892 15 1 14.0611 1 12.907V3.09302" stroke="none" stroke-width="1.1" />
                                    <path d="M6 10.4995L13 1" stroke="none" stroke-width="1.1" />
                                </svg>
                            </span>
                            <span className='menuText'>
                                Portfolio
                            </span>
                        </a>
                    </li>
                    <li className='menuItem has-innermenu'>
                        <a href="" className='menuLink d-flex'>
                            <span className='menuIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                                    <path d="M12.4186 12H2.09302C0.93892 12 0 11.0611 0 9.90698V2.09302C0 0.938919 0.93892 0 2.09302 0H12.4186C13.5727 0 14.5116 0.938919 14.5116 2.09302V9.90698C14.5116 11.0611 13.5727 12 12.4186 12ZM13.6744 4.74417H10.6047C9.91222 4.74417 9.34884 5.30752 9.34884 6C9.34884 6.69248 9.91219 7.25582 10.6047 7.25582H13.6744V4.74417ZM13.6744 8.09302H10.6047C9.45057 8.09302 8.51165 7.1541 8.51165 6C8.51165 4.8459 9.45057 3.90698 10.6047 3.90698H13.6744V2.09302C13.6744 1.40057 13.1111 0.837196 12.4186 0.837196H2.09302C1.40057 0.837196 0.837197 1.40054 0.837197 2.09302V9.90698C0.837197 10.5994 1.40054 11.1628 2.09302 11.1628H12.4186C13.1111 11.1628 13.6744 10.5995 13.6744 9.90698V8.09302Z" fill="#C78D4E" />
                                    <path d="M11.1648 6.41917H10.6067C10.3755 6.41917 10.1881 6.23174 10.1881 6.00058C10.1881 5.76938 10.3755 5.58198 10.6067 5.58198H11.1648C11.396 5.58198 11.5834 5.76941 11.5834 6.00058C11.5834 6.23177 11.396 6.41917 11.1648 6.41917Z" fill="#C78D4E" />
                                </svg>
                            </span>
                            <span className='menuText'>
                                Wallets
                            </span>
                        </a>
                        <span className='inner-item'>
                            <span className='inner-item-link'>Wallet 1</span>
                            <span className='inner-item-link add-item'>+ add wallet</span>
                        </span>
                    </li>
                    <li className='menuItem'>
                        <a href="" className='menuLink d-flex'>
                            <span className='menuIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                                    <path d="M11.3536 12.3536C11.5488 12.1583 11.5488 11.8417 11.3536 11.6464L8.17157 8.46447C7.97631 8.2692 7.65973 8.2692 7.46447 8.46447C7.2692 8.65973 7.2692 8.97631 7.46447 9.17157L10.2929 12L7.46447 14.8284C7.2692 15.0237 7.2692 15.3403 7.46447 15.5355C7.65973 15.7308 7.97631 15.7308 8.17157 15.5355L11.3536 12.3536ZM1 12.5L11 12.5L11 11.5L1 11.5L1 12.5Z" fill="#E7E7E7" />
                                    <path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z" fill="#E7E7E7" />
                                </svg>
                            </span>
                            <span className='menuText'>
                                Last Transactions
                            </span>
                        </a>
                    </li>
                    <li className='menuItem'>
                        <a href="" className='menuLink d-flex'>
                            <span className='menuIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                                    <path d="M2.09302 11.45H12.4186C13.269 11.45 13.9616 10.7573 13.9616 9.90698V2.09302C13.9616 1.24268 13.269 0.549999 12.4186 0.549999H2.09302C1.24268 0.549999 0.55 1.24268 0.55 2.09302V9.90698C0.55 10.7573 1.24268 11.45 2.09302 11.45Z" stroke="#E7E7E7" stroke-width="1.1" />
                                    <path d="M9 6L6 7.73205L6 4.26795L9 6Z" stroke="#C4C4C4" />
                                </svg>
                            </span>
                            <span className='menuText'>
                                Tutorials
                            </span>
                        </a>
                    </li>
                    <li className='menuItem'>
                        <a href="" className='menuLink d-flex'>
                            <span className='menuIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                    <path d="M11.9811 10.204C11.5782 10.204 11.2504 10.5318 11.2504 10.9348C11.2504 11.3377 11.5782 11.6655 11.9811 11.6655C12.3841 11.6655 12.7119 11.3377 12.7119 10.9348C12.7119 10.5319 12.3841 10.204 11.9811 10.204ZM11.9811 11.2325C11.817 11.2325 11.6834 11.0989 11.6834 10.9348C11.6834 10.7707 11.817 10.6371 11.9811 10.6371C12.1452 10.6371 12.2788 10.7707 12.2788 10.9348C12.2788 11.0989 12.1452 11.2325 11.9811 11.2325Z" fill="#E7E7E7" />
                                    <path d="M14.164 9.65249L14.1706 9.65845C14.6494 10.0904 14.9236 10.6861 14.9402 11.3307L14.9402 11.3308C14.9568 11.9754 14.7137 12.5844 14.2577 13.0404L14.2577 13.0404C13.8166 13.4814 13.2316 13.7237 12.6095 13.7237C12.5917 13.7237 12.5738 13.7236 12.556 13.7232H12.5559C11.9143 13.7088 11.3196 13.4388 10.8864 12.9652L10.8863 12.9651L7.27676 9.01528L7.27667 9.01519L6.30549 7.95317C5.04988 8.2632 3.70296 7.8994 2.77545 6.97192L2.77545 6.97191C2.31529 6.51174 1.81399 5.99134 1.49615 5.41405C1.16863 4.8192 1.02144 4.13667 1.30922 3.38629L1.30925 3.38623C1.38404 3.1913 1.55238 3.04748 1.75659 3.00403L1.75676 3.004C1.96088 2.96066 2.17308 3.02341 2.32079 3.17104L2.32086 3.17111L3.93325 4.7835L5.73364 3.2569L4.13684 1.66007C4.13684 1.66007 4.13684 1.66007 4.13684 1.66007C3.98909 1.51232 3.92639 1.29999 3.96973 1.09595C4.01315 0.891522 4.15712 0.723219 4.35196 0.648459L4.35203 0.648433C5.78693 0.0981334 7.0608 0.720931 8.04361 1.70374L14.164 9.65249ZM14.164 9.65249L14.1571 9.64683M14.164 9.65249L14.1571 9.64683M14.1571 9.64683L10.284 6.45377L9.00797 5.30287M14.1571 9.64683L9.00797 5.30287M9.00797 5.30287C9.35051 4.02707 8.99331 2.65341 8.04362 1.70375L9.00797 5.30287ZM5.83691 3.36017C5.83686 3.36012 5.83681 3.36007 5.83676 3.36002L5.8369 3.36017L5.83691 3.36017Z" stroke="#E7E7E7" stroke-width="0.8" />
                                </svg>
                            </span>
                            <span className='menuText'>
                                Setting
                            </span>
                        </a>
                    </li>
                </ul>
                <a href="" className='cust-button-primary'>Support</a>
            </div>
            <div className="pageContent">
                <div className="cust-row flex-end">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10Z" stroke="#4848F6" stroke-width="0.5" />
                            <path d="M6.8502 9.3939L6.85008 9.39378C6.68267 9.22637 6.45561 9.13232 6.21886 9.13232C5.9821 9.13232 5.75504 9.22637 5.58763 9.39378C5.42022 9.56119 5.32617 9.78825 5.32617 10.025C5.32617 10.2618 5.42022 10.4888 5.58763 10.6562L8.09138 13.156C8.0914 13.156 8.09142 13.156 8.09144 13.156C8.09146 13.156 8.09147 13.1561 8.09149 13.1561C8.25925 13.3233 8.48647 13.4172 8.72336 13.4172C8.96029 13.4172 9.18756 13.3233 9.35533 13.156L14.408 8.10933L6.8502 9.3939ZM6.8502 9.3939L8.3422 10.8839L8.34299 10.8847M6.8502 9.3939L8.34299 10.8847M8.34299 10.8847C8.4441 10.9848 8.58061 11.0409 8.72286 11.0409C8.86511 11.0409 9.00161 10.9848 9.10272 10.8847L9.10352 10.8839M8.34299 10.8847L9.10352 10.8839M9.10352 10.8839L13.1445 6.84789L13.1447 6.84767M9.10352 10.8839L13.1447 6.84767M13.1447 6.84767C13.2276 6.76472 13.326 6.69891 13.4342 6.65398M13.1447 6.84767L13.4342 6.65398M13.4342 6.65398C13.5425 6.60905 13.6586 6.58589 13.7758 6.58582M13.4342 6.65398L13.7758 6.58582M13.7758 6.58582C13.893 6.58574 14.0091 6.60876 14.1175 6.65356M13.7758 6.58582L14.1175 6.65356M14.1175 6.65356C14.2258 6.69835 14.3242 6.76404 14.4072 6.84689M14.1175 6.65356L14.4072 6.84689M14.4072 6.84689C14.4901 6.92973 14.5559 7.0281 14.6009 7.13637M14.4072 6.84689L14.6009 7.13637M14.6009 7.13637C14.6458 7.24465 14.669 7.36072 14.669 7.47795M14.6009 7.13637L14.669 7.47795M14.669 7.47795C14.6691 7.59518 14.6461 7.71127 14.6013 7.81961M14.669 7.47795L14.6013 7.81961M14.6013 7.81961C14.5565 7.92785 14.4909 8.02622 14.4082 8.10912L14.6013 7.81961Z" fill="#4848F7" stroke="#0A1018" stroke-width="0.5" />
                        </svg>
                        Synchronized
                    </p>
                    <a href="" className='btn-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                            <rect width="31.3939" height="28" rx="3" fill="#1A212B" />
                            <path d="M15.375 18.375C12.9588 18.375 11 16.4162 11 14C11 11.5838 12.9588 9.625 15.375 9.625" stroke="#D1D0D0" stroke-width="5" />
                            <path d="M16.625 19C19.3864 19 21.625 16.7614 21.625 14C21.625 11.2386 19.3864 9 16.625 9" stroke="#0A1018" stroke-width="5" />
                        </svg>
                    </a>
                    <a href="" className='btn-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                            <rect width="31.3939" height="28" rx="3" fill="#1A212B" />
                            <path d="M19.905 20.0667L12.4699 20.1964C11.787 20.2083 11.221 19.6623 11.2091 18.9788L11.1082 13.1959C11.0963 12.5124 11.6429 11.947 12.3258 11.9351L19.7609 11.8054C20.4439 11.7935 21.0098 12.3395 21.0217 13.023L21.1226 18.8059C21.1345 19.4894 20.588 20.0548 19.905 20.0667ZM12.3402 12.7612C12.1127 12.7652 11.9304 12.9535 11.9343 13.1815L12.0352 18.9644C12.0392 19.1924 12.228 19.3742 12.4555 19.3703L19.8906 19.2406C20.1181 19.2366 20.3005 19.0483 20.2965 18.8203L20.1956 13.0374C20.1916 12.8094 20.0029 12.6276 19.7754 12.6316L12.3402 12.7612Z" fill="#F5CEA3" />
                            <path d="M18.9504 12.646C18.7224 12.6499 18.5341 12.4681 18.5301 12.2401L18.4941 10.1748C18.4703 8.80833 17.339 7.7158 15.9725 7.73964C14.6061 7.76347 13.5135 8.89479 13.5374 10.2612L13.5734 12.3266C13.5774 12.5546 13.3955 12.7429 13.1675 12.7468C12.9395 12.7508 12.7512 12.569 12.7473 12.341L12.7112 10.2757C12.6794 8.45317 14.1356 6.9453 15.9581 6.91351C17.7806 6.88172 19.2885 8.3379 19.3202 10.1604L19.3563 12.2257C19.3602 12.4537 19.1784 12.642 18.9504 12.646Z" fill="#F5CEA3" />
                        </svg>
                    </a>
                </div>
                <div className="cust-row heading-btn">
                    <h2>Wallet 1</h2>
                    <a href="" className='cust-button-dark'>+  Add Coin</a>
                </div>
                <div className="cust-row total-coin-outer">
                    <p className='cust-label'>Total Coin - 6</p>
                    <p className='cust-label drop-down' aria-describedby={id} variant="contained" onClick={handleClick} >
                        <span className='cust-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                <path d="M3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.53553 8.17157C7.7308 7.97631 7.7308 7.65973 7.53553 7.46447C7.34027 7.2692 7.02369 7.2692 6.82843 7.46447L4 10.2929L1.17157 7.46447C0.97631 7.2692 0.659728 7.2692 0.464466 7.46447C0.269204 7.65973 0.269204 7.97631 0.464466 8.17157L3.64645 11.3536ZM3.5 1L3.5 11L4.5 11L4.5 1L3.5 1Z" fill="#C78D4E" />
                                <path d="M12.3536 0.646446C12.1583 0.451184 11.8417 0.451184 11.6464 0.646446L8.46447 3.82843C8.2692 4.02369 8.2692 4.34027 8.46447 4.53553C8.65973 4.7308 8.97631 4.7308 9.17157 4.53553L12 1.70711L14.8284 4.53553C15.0237 4.7308 15.3403 4.7308 15.5355 4.53553C15.7308 4.34027 15.7308 4.02369 15.5355 3.82843L12.3536 0.646446ZM12.5 11L12.5 1L11.5 1L11.5 11L12.5 11Z" fill="#C78D4E" />
                            </svg>
                        </span>
                        {filter}
                        <span className='drop-down-icon'>
                            <img src={DropdownImg} className={open ? "rotate" : ""} />
                        </span>
                    </p>

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        className='cust-filter'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <div className='cust-filter-wrapper'>
                            <Typography sx={{ p: 1 }} onClick={() => setFilterFun("Amount   High - Low")}>Amount   High - Low</Typography>
                            <Typography sx={{ p: 1 }} onClick={() => setFilterFun("Amount   Low - High")}>Amount   Low - High</Typography>
                            <Typography sx={{ p: 1 }} onClick={() => setFilterFun("Arrange   A-Z")}>Arrange   A-Z</Typography>
                            <Typography sx={{ p: 1 }} onClick={() => setFilterFun("Arrange   Z-A")}>Arrange   Z-A</Typography>
                        </div>
                    </Popover>
                </div>
                <div className="total-recordslist-outer">
                    {DummyData.map(item =>

                        <div className="recordlistitem">
                            <div className="recordlistitem-col">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                    <circle cx="18.0565" cy="18.4917" r="15" transform="rotate(-12.199 18.0565 18.4917)" fill="#403D3A" />
                                    <path d="M23.366 15.713C23.2567 14.0134 21.811 13.3994 19.9695 13.1793L20.0433 10.8285L18.6131 10.7841L18.5407 13.073C18.1647 13.0606 17.7807 13.0564 17.3975 13.0521L17.4708 10.7483L16.0404 10.7032L15.9664 13.0532C15.6565 13.0495 15.3516 13.0464 15.0551 13.0365L15.0552 13.0291L13.0817 12.9665L13.0339 14.4945C13.0339 14.4945 14.0915 14.5076 14.0733 14.5263C14.6528 14.5449 14.8304 14.8872 14.8764 15.1798L14.7927 17.8575C14.8324 17.8588 14.8842 17.8624 14.9437 17.8717L14.7924 17.8674L14.6744 21.6189C14.6428 21.8 14.5265 22.0874 14.1211 22.0755C14.1395 22.0921 13.0815 22.043 13.0815 22.043L12.7435 23.7422L14.6059 23.8008C14.9521 23.8123 15.2928 23.8291 15.6268 23.8415L15.5529 26.2187L16.9823 26.2632L17.0562 23.9123C17.4485 23.932 17.8282 23.9469 18.1991 23.9588L18.1248 26.2998L19.555 26.3441L19.63 23.9717C22.0401 23.9094 23.7424 23.3564 24.0226 21.104C24.2488 19.2908 23.4187 18.4516 22.0635 18.0812C22.9069 17.6851 23.4483 16.9572 23.366 15.713ZM21.2039 20.7334C21.1498 22.5102 18.1134 22.2122 17.1434 22.1826L17.2435 19.0328C18.2138 19.0639 21.2629 18.8807 21.2039 20.7334ZM20.6785 16.2685C20.6276 17.8851 18.0964 17.616 17.2894 17.5907L17.379 14.7349C18.1861 14.7602 20.7316 14.5823 20.6785 16.2685Z" fill="#DB953C" />
                                </svg>
                                <span>{item.coinName}</span>
                            </div>
                            <div className="recordlistitem-col">
                                <span>{item.currentCoinBalance}</span>
                            </div>
                            <div className="recordlistitem-col">
                                <span>{item.value}</span>
                            </div>
                            <div className="recordlistitem-col action-btn">
                                <a href="javascript:void(0);" onClick={() => setModal(true)} className='receive'><svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                                    <path d="M2.45682 5.41176L2.52147 3.20218C2.51302 2.85385 2.22629 2.5752 1.89464 2.57591L1.89434 2.57591C1.54078 2.57625 1.2653 2.85173 1.26496 3.20529L1.26498 3.20529L1.26494 3.20843L1.20638 7.53931C1.20687 7.87541 1.48928 8.15693 1.82444 8.15622L1.82444 8.15616L1.82986 8.15626L6.30571 8.24367C6.65814 8.24211 6.93239 7.96707 6.93273 7.6143C6.93306 7.27755 6.65031 6.99523 6.31467 6.99594L6.31467 6.99614L6.3047 6.99577L3.93465 6.90626L3.36232 6.88465L3.76731 6.47966L8.90072 1.34625C9.14963 1.09734 9.15178 0.702239 8.91077 0.461226C8.66648 0.216939 8.26249 0.216839 8.0169 0.462433L2.88349 5.59585L2.43841 6.04093L2.45682 5.41176Z" fill="#8484F1" stroke="#161C23" stroke-width="0.5" />
                                </svg>RECEIVE</a>
                                <a href="" className='send'><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <path d="M6.95987 3.1049L6.94261 5.31536C6.95853 5.66343 7.25117 5.93586 7.58273 5.92804L7.58302 5.92803C7.9365 5.92011 8.20601 5.63879 8.19877 5.2853L8.19875 5.2853L8.19872 5.28216L8.1644 0.951025C8.15671 0.615006 7.86832 0.339608 7.53326 0.34751L7.53326 0.347569L7.52784 0.347579L3.05114 0.356162C2.69883 0.365283 2.43054 0.646139 2.43776 0.998838C2.44466 1.33551 2.73339 1.61171 3.06894 1.6038L3.06893 1.6036L3.07891 1.60376L5.45034 1.64242L6.023 1.65176L5.62679 2.06534L0.604627 7.30764C0.361114 7.56183 0.367429 7.95689 0.613554 8.19268C0.863023 8.43167 1.26692 8.42311 1.50719 8.1723L6.52935 2.93L6.96479 2.47548L6.95987 3.1049Z" fill="#CAA276" stroke="#161C23" stroke-width="0.5" />
                                </svg>SEND</a>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
        <Modal
            open={modal}
            onClose={() => setModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="cust-model-wrapper">
                <h2 className='heading-text'>Receive</h2>
                <span className='close-icon' onClick={() => {
                    setModal(false)
                }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7.51649 4.87645L11.5562 0.835978C11.752 0.648275 12.0135 0.544477 12.2848 0.546835C12.5575 0.549204 12.8183 0.658572 13.0111 0.851383L13.3647 0.49783L13.0111 0.851384C13.2039 1.04419 13.3133 1.30502 13.3157 1.57769C13.318 1.84905 13.2142 2.11053 13.0265 2.30636L8.98678 6.34686L8.63329 6.70042L8.98681 7.05394L13.0299 11.097L13.0298 11.0971L13.0391 11.106C13.1398 11.2016 13.2203 11.3164 13.2759 11.4436C13.3315 11.5708 13.361 11.7078 13.3628 11.8466C13.3646 11.9854 13.3386 12.1231 13.2864 12.2517C13.2341 12.3803 13.1566 12.4971 13.0585 12.5953C12.9603 12.6934 12.8435 12.771 12.715 12.8233C12.5864 12.8756 12.4487 12.9017 12.3099 12.8999C12.1711 12.8982 12.034 12.8686 11.9068 12.8131C11.7796 12.7575 11.6648 12.6771 11.5692 12.5765L11.5693 12.5764L11.5603 12.5674L7.51646 8.52352L7.1629 8.16997L6.80935 8.52352L2.77048 12.5624C2.57433 12.7466 2.31432 12.8477 2.04509 12.8442C1.77391 12.8406 1.51484 12.7313 1.32311 12.5395L0.969498 12.893L1.32311 12.5395C1.13138 12.3477 1.02216 12.0886 1.01874 11.8175C1.01534 11.5482 1.11651 11.2882 1.30083 11.0921L5.339 7.05394L5.69252 6.70042L5.33903 6.34686L1.29594 2.30301L1.29606 2.30289L1.28668 2.29398C1.18603 2.19839 1.10554 2.08362 1.04994 1.95644C0.994349 1.82925 0.96478 1.69222 0.962978 1.55343C0.961177 1.41463 0.987179 1.27688 1.03945 1.14829C1.09173 1.01971 1.16922 0.902886 1.26735 0.804718C1.36548 0.70655 1.48228 0.629021 1.61084 0.576702C1.73941 0.524382 1.87715 0.49833 2.01595 0.500083C2.15474 0.501835 2.29178 0.531356 2.41899 0.586905C2.5462 0.642454 2.661 0.722907 2.75662 0.823522L2.7565 0.823633L2.76549 0.832625L6.80935 4.87648L7.16294 5.23007L7.51649 4.87645Z" fill="#9D9D9D" stroke="#0A1018" />
                    </svg>
                </span>
                <Box sx={{ width: '100%' }} className="cust-model-inner">
                    <Stepper activeStep={activeStep} className='cust-steper'>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === 0 ? (
                        <div>
                            <div className='card-main'>
                                <p>Follow the instruction on device</p>
                                {deviceData.map(item => (
                                    <div className='device-card'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                            <path d="M8.96989 5.44779L7.36176 6.96448C7.12142 7.21676 7.12714 7.61654 7.36216 7.85056L7.36237 7.85076C7.61261 8.10053 8.0022 8.10053 8.25245 7.85076L8.25243 7.85075L8.25468 7.84856L11.3585 4.82757C11.5958 4.58957 11.5952 4.19081 11.3577 3.95432L11.3576 3.95436L11.3539 3.95046L8.25077 0.723741C8.00046 0.475646 7.61206 0.476202 7.36237 0.725408C7.12402 0.963291 7.12432 1.36286 7.36216 1.59968L7.3623 1.59954L7.36908 1.60686L8.98168 3.34603L9.37109 3.76601L8.79835 3.76601L1.53861 3.76601C1.1866 3.76601 0.905697 4.04386 0.905697 4.38471C0.905697 4.73018 1.19129 5.01591 1.53861 5.01591L8.79835 5.01592L9.42779 5.01592L8.96989 5.44779Z" fill="#CAA276" stroke="#212427" stroke-width="0.5" />
                                        </svg>
                                        <p>{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : ""}
                    <Divider sx={{ background: "#272726" }} />
                    <Button variant='outlined' className='cust-submit-btn'>Continue</Button>
                </Box>
            </Box>
        </Modal>
    </>
    )
}

export default Home