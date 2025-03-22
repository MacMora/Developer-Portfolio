import { FlattenKeys, useTypedTranslation } from '@neiderruiz/translate-files/next-js/hooks';
import en from '@/services/langs/en/en.json';
type Tylelang = typeof en

export type KeysTranslation = FlattenKeys<Tylelang>

const useTranslation = () => {
    return {
        ...useTypedTranslation<Tylelang>()
    }
}

export default useTranslation
