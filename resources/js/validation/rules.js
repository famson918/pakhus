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
    
    const email = (value, args, { field }) => {
        if (!value) {
            let msg = t('the') + " " + t(field) + " " + t('field')
            return msg
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

    return {
        required,
        email,
        min
    }
}