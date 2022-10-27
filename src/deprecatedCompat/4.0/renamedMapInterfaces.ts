// DEPRECATION: Renamed `Map` and `ReadonlyMap` interfaces
// DEPRECATION PLAN:
//     - soft: 4.0
//     - remove: TBD (will remove for at least one release before replacing with `ESMap`/`ReadonlyESMap`)
//     - replace: TBD (will eventually replace with `ESMap`/`ReadonlyESMap`)
namespace ts {
    /**
     * @deprecated Use `ts.ReadonlyESMap<K, V>` instead.
     */
    export interface ReadonlyMap<T> extends ReadonlyESMap<string, T> {
    }

    /**
     * @deprecated Use `ts.ESMap<K, V>` instead.
     */
    export interface Map<T> extends ESMap<string, T> {
    }
}