import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DocumentsPage from 'components/documents/DocumentsPage'
import { endpoints } from 'service/apiEndpoints'
import { queryFn } from 'service/restRequests'

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const client = new QueryClient()
  await client.prefetchQuery(endpoints.documents.documentsList.url, queryFn)

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'bg', [
        'common',
        'auth',
        'document',
        'validation',
      ])),
      dehydratedState: dehydrate(client),
    },
  }
}

export default DocumentsPage
