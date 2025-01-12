import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({defaultOptions: {
	queries: {
		refetchOnMount: true,
		refetchOnReconnect: true,
		refetchOnWindowFocus: true,
        refetchInterval: 7200000
        
        /* staleTime: 60000, //time during which no refetch is necessary */
        /* refetchInterval: 36000000, //1 hour */
        /* cacheTime: 36000000, //1 hour, if inactive for that time, it is removed from the cache */    
        /* enabled: true, //leaves the query in idle, used with refetch, for manual fetch e.g., search */
        /* retry: 3 //by default makes 3 attempts on error, each with increasing wait time */
        /* retryDelay: 1000 //wait time before making another fetch attempt on error */

	},
}})