'use client';

import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const Chatbot = () => {
  useEffect(() => {
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        (window as any).voiceflow.chat.load({
          verify: { projectID: 'YOUR_VOICEFLOW_PROJECT_ID' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode?.insertBefore(v, s);
    })(document, 'script');
  }, []);

  return <Box id="voiceflow-chat" />;
};

export default Chatbot;