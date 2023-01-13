import * as React from 'react';
import { defaultPriceMetadata } from './prices';
import { defaultContext } from './types';

export type SearchMetadata = {
    chain: string;
    txhash: string;
};

export const defaultSearchMetadata = () => {
    return {
        chain: 'okc', // ethereum 实际没用上
        txhash: '',
    };
};

export const SearchMetadataContext = React.createContext(defaultContext(defaultSearchMetadata()));
