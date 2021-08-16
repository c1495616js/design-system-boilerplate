import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import shallow from 'zustand/shallow';

import { useToastStore } from './hook/useToastControls';
import styled from 'styled-components';

const StyledMotionBox = styled(motion.div)`
  border-radius: 4px;
  padding: 10px 20px;
  background-color: #bee3f8;
`;

export function Toast(props: any) {
  const { uniqueId, config = {}, children } = props;
  const { duration = 3500, role = 'status' } = config;

  const { toastList, close } = useToastStore(
    (store) => ({
      toastList: store.toastList,
      close: store.close,
    }),
    shallow
  );

  const isShown = toastList.has(uniqueId);

  useEffect(() => {
    if (!duration || !isShown) {
      return;
    }

    const timeoutId = setTimeout(() => {
      close(uniqueId);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [uniqueId, isShown, duration, close]);

  return createPortal(
    <AnimatePresence>
      {isShown && (
        <StyledMotionBox
          key={uniqueId}
          layout
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          className="toast"
          role={role}
        >
          {children}
        </StyledMotionBox>
      )}
    </AnimatePresence>,
    document.querySelector('#portal-root')!
  );
}
