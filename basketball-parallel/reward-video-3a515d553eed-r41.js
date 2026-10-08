export const REWARD_ACTIVITY_ID=390;
export const REWARD_SDK_URL="";
export const getRewardHost=()=>window;
export const ensureRewardSdk=async()=>window.VaFuSDK;
export const waitForRewardResult=async p=>p;
export function createVaRewardClient(){return {readAvailability:async()=>true,complete:async()=>({ok:true,rewarded:true})};}
