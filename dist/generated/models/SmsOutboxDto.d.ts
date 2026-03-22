export type SmsOutboxDto = {
    smsOutboxId?: number | string;
    smsTo?: string;
    body?: string;
    maxTryCount?: number | string;
    tryCount?: number | string;
    statusId?: number | string;
    sendDate?: string | null;
    resultCode?: number | string | null;
    resultText?: string | null;
    timerId?: string | null;
    extensionData?: string | null;
};
