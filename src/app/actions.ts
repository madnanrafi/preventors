'use server'

type ActionState = {
    success: boolean;
    message: string;
};

export async function submitContactForm(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    if (!name || !phone) {
        return { success: false, message: 'Please provide both name and phone number.' };
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxW57XcJb7cuq_N1VNB38O1w5spTgySMLIHWnBhP2ev_V6ZwFa3m2xybR3THKZDaeD7/exec';

    try {
        await fetch(scriptURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phone }),
        });

        return { success: true, message: 'Thank You for your Response. Our Team will contact you soon' };
    } catch (error) {
        console.error('Error submitting form:', error);
        return { success: false, message: 'Something went wrong. Please try again or call us directly.' };
    }
}
