import { DependencyList, EffectCallback, useEffect } from 'react';

import { useIsFirstRender } from '../useIsFirstRender';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
    const isFirst = useIsFirstRender();

    useEffect(() => {
        if (!isFirst) {
            return effect();
        }
    }, deps);
}
