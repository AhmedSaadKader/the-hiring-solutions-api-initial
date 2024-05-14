import { Router } from 'express';
import {
  createJobRequirement,
  deleteJobRequirement,
  getAllJobRequirements,
  getJobRequirement
} from '../controllers/jobRequirementsControllers';

const router = Router();

router.get('/', getAllJobRequirements);

router.get('/:candidateId/:skillId', getJobRequirement);

router.post('/', createJobRequirement);

router.delete('/:candidateId/:skillId', deleteJobRequirement);

export default router;
