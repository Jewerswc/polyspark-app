import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export const initMixpanel = () => {
  console.log('mixpanel token is:', process.env.NEXT_PUBLIC_MIXPANEL_TOKEN)
  if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
    mixpanel.init( process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV === 'development',
      api_host: 'https://api.mixpanel.com',
    });
  }
};

export const trackEvent = (name, props = {}) => {
  if (!MIXPANEL_TOKEN) return;
  mixpanel.track(name, props);
};

export const identifyUser = (id, traits = {}) => {
  if (!MIXPANEL_TOKEN) return;
  mixpanel.identify(id);
  mixpanel.people.set(traits);
};
