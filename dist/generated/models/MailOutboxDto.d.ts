export type MailOutboxDto = {
    mailOutboxId?: number | string;
    mailFrom?: string;
    mailTo?: string;
    mailCc?: string | null;
    mailBcc?: string | null;
    subject?: string;
    body?: string | null;
    statusId?: number | string;
};
