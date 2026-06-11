const BASE_URL = "http://localhost:5000";

async function testEndpoint(
  method,
  endpoint,
  expectedLimit = 5
) {
  console.log(`\nTesting ${method} ${endpoint}`);

  for (let i = 1; i <= expectedLimit + 1; i++) {
    try {
      const res = await fetch(
        `${BASE_URL}${endpoint}`,
        {
          method,
        }
      );

      console.log(
        `Request ${i}: ${res.status}`
      );
    } catch (err) {
      console.error(err.message);
    }
  }
}

async function runTests() {
  console.log("\n===== SEARCH ROUTES =====");

  await testEndpoint("GET", "/api/search");
  await testEndpoint("GET", "/api/search/suggestions");
  await testEndpoint("GET", "/api/search/popular");

  console.log("\n===== ISSUE ROUTES =====");

  await testEndpoint("GET", "/api/issues/nearby");

  console.log("\n===== WORKER ROUTES =====");

  await testEndpoint("GET", "/api/workers");

  console.log("\n===== INDEPENDENCE CHECK =====");

  for (let i = 1; i <= 6; i++) {
    const res = await fetch(
      `${BASE_URL}/api/search`
    );

    console.log(
      `Search Request ${i}: ${res.status}`
    );
  }

  const workerRes = await fetch(
    `${BASE_URL}/api/workers`
  );

  console.log(
    `Worker Route After Search Limit: ${workerRes.status}`
  );

  const issueRes = await fetch(
    `${BASE_URL}/api/issues/nearby`
  );

  console.log(
    `Issue Route After Search Limit: ${issueRes.status}`
  );
}

runTests();