import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import useResponseHandler from './useResponseHandler';
import { useStore } from '../Store/Store';

export function useLogin(payload) {
  const { handleResponse } = useResponseHandler();
  const { setUser, setToken } = useStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    setToken: state.setToken,
  }));
  const navigate = useNavigate();
  // const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const uploadPayload = {
        data: payload,
      };
      return handleResponse('manager/manager_login/', 'post', uploadPayload);
    },
    onSuccess: (data) => {
      setUser(data);
      setToken(data.session.token);
      toast.success('Login Success');
      navigate('/');
      location.reload();
      // window.location.assign(window.location.href);
    },
    onError: (error) => {
      console.log(error, 'error login');
      toast.error(
        'Your login attempt was unsuccessful. Please double-check your email and password.'
      );
    },
  });
  // });
}

export function useAdminFetch(payload) {
  const { handleResponse } = useResponseHandler();
  const filter = payload.params.role;

  return useQuery({
    queryKey: ['administratorTable', { filter }],
    queryFn: async () => {
      const uploadPayload = {
        params: { role: filter },
      };
      const response = handleResponse('manager/crud/v1/', 'get', uploadPayload);
      return response;
    },
    placeholderData: keepPreviousData,
  });
}

export function useAdminPost(payload) {
  const { handleResponse } = useResponseHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const uploadPayload = {
        data: payload,
      };
      return handleResponse('manager/crud/v1/', 'post', uploadPayload);
    },
    onSuccess: () => {
      toast.success(`Mail has been sent to ${payload.email}.`);
      // handleClose();
    },
    onError: (error) => {
      console.log(error, 'error login');
      toast.error('Error occurred while processing.(ADMPOP)');
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ['administratorTable'],
        });
      }
    },
  });
}
export function useAdminUpdateAdmin(payload, targetedId) {
  const { handleResponse } = useResponseHandler();

  return useMutation({
    mutationFn: async () =>
      handleResponse(`manager/crud/v1/${targetedId}/`, 'put', {
        data: payload,
      }),
    // onSuccess: () => {
    //   toast.success(`Mail has been sent to ${formData.email}.`);
    //   handleClose();
    // },
    onError: (error) => {
      console.log(error, 'error login');
      toast.error('Error occurred while processing.(ADMPOP)');
    },
  });
}

//
//
//
//
//
//
//

// export function useAdminFetch(selectedFilter) {
//   return useQuery({
//     queryKey: ["administratorTable", { selectedFilter }],
//     // queryKey: ["administratorTable", {}],

//     queryFn: ({ queryKey }) => {
//       const [, { selectedFilter }] = queryKey;
//       return getAdminTableData(selectedFilter);
//     },
//     placeholderData: keepPreviousData,
//   });
// }

// export function useAdminFetch(selectedFilter) {
//   return useQuery({
//     queryKey: ["administratorTable", { selectedFilter }],
//     queryFn: ({ queryKey }) => {
//       const [, { selectedFilter }] = queryKey;
//       return getAdminTableData(selectedFilter);
//     },
//     placeholderData: keepPreviousData,
//   });
// }
// export function useAdminFetch(payload) {
//   return useQuery({
//     queryKey: ["administratorTable", { selectedFilter }],
//     queryFn: ({ queryKey }) => {
//       const [, { selectedFilter }] = queryKey;
//       return getAdminTableData(selectedFilter);
//     },
//     placeholderData: keepPreviousData,
//   });
// }
