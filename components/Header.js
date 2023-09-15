import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';
import Link from 'next/link'; // Link コンポーネントをインポート




export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.header} position="static">
        <Toolbar variant="dense" style={{ justifyContent: 'center' }}>
            <Link className={styles.link} href="/blog"> {/* ここでLinkを追加 */}
                <Typography variant="h6" color="inherit" component="div" style={{cursor: 'pointer'}}>
                なかなかぶろぐ
                </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
