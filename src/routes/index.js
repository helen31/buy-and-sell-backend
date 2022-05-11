import { getAllListingsRoute } from './get-all-listings';
import { getListingRoute } from './get-listing';
import { addViewToListingRoute } from './add-view-to-listing';
import { getUserListingsRoute } from './get-user-listings';
import { createNewListingRoute } from './create-new-listing';
import { updateListingRoute } from './update-listing';
import { deleteListingRoute } from './delete-listing';
import { staticFilesRoute, filesRoutes } from './files';

export default [
    getAllListingsRoute,
    getListingRoute,
    addViewToListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute,
    staticFilesRoute,
    ...filesRoutes,
];