import { useI18n } from 'vue-i18n';

export default function useRules() {
    const { t } = useI18n();

    const required = (value, args, { field }) => {
        if (!value) {
            // return `The ${field} field is required.`
            let msg = t('the') + " " + t(field) + " " + t('field')
            return msg
        }
    
        return true
    }
    
    const checkEmail = (value, args, { field }) => {
        if (!value) {
            let msg = t('the') + " " + t(field) + " " + t('field')
            return msg
        }

           // Regular expression for basic email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            return t('validEmail');
        }
    
        return true
    }
    
    const min = (value, [limit], { field }) => {
        if (!value || !value.length) {
            return true
        }
    
        if (value.length < limit) {
            let msg = t('the') + " " + t(field) + " " + t('mustBeAtLeast') + " " + limit + t('characters');
            return msg
        }
    
        return true
    }

    const max = (value, [limit], { field }) => {
        if (!value || !value.length) {
            return true
        }
    
        if (value.length > limit) {
            let msg = t('the') + " " + t(field) + " " + t('musthave') + " " + limit + t('characters');
            return msg
        }
    
        return true
    }

    return {
        required,
        checkEmail,
        min,
        max
    }
}