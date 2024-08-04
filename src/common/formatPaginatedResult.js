const formatPaginatedResult = (paginatedData, dtoMapper) => {
  const result = paginatedData.docs.map((data) => new dtoMapper(data));

  return {
    result: result,
    totalRecords: paginatedData.totalDocs,
    pageSize: paginatedData.limit,
    totalPages: paginatedData.totalPages,
    pageNumber: paginatedData.page,
  };
};

export default formatPaginatedResult;
