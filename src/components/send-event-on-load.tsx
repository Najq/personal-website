'use client';

import { useEffect, useRef } from 'react';


export function SendEventOnLoad({
  eventKey,
  afterEventSent,
}: {
  eventKey: string;
  afterEventSent?: () => void;
}) {
  const isSent = useRef(false);

  useEffect(() => {
    if (isSent.current) return;
    isSent.current = true;
  }, [eventKey, afterEventSent]);

  return null;
}
