import React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { useModal } from './hook/useModal';
import styled from 'styled-components';

const StyledMotionBox = styled(motion.div)`
  border-radius: 4px;
  padding: 10px 20px;
  background-color: #bee3f8;
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export function Modal(props: any) {
  const { children } = props;

  const { show, title, toggle } = useModal();

  return createPortal(
    <AnimatePresence>
      {show && (
        <StyledWrapper onClick={() => toggle()}>
          <StyledMotionBox
            key={'modal'}
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            className="toast"
            role={'role'}
            onClick={(e) => e.stopPropagation()}
          >
            <div>Title: {title}</div>
            {children}
          </StyledMotionBox>
        </StyledWrapper>
      )}
    </AnimatePresence>,
    document.querySelector('#modal-root')!
  );
}
